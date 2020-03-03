// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.datastore.Entity;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Servlet that returns funFacts. */
@WebServlet("/data")
public final class DataServlet extends HttpServlet {
  public static class Comment{
      public final long id;
      public final String thought;
      public final long timestamp;
      public Comment (long id, String thought,long timestamp){
          this.id = id;
          this.thought = thought;
          this.timestamp = timestamp; 
      }
}

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    System.out.println("loading comments");
    Query query = new Query("Comment").addSort("timestamp", SortDirection.DESCENDING);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    List<Comment> comments = new ArrayList<>();

    for (Entity entity : results.asIterable()) {
        long id = entity.getKey().getId();
        String thought = (String) entity.getProperty("comment");
        long timestamp = (long) entity.getProperty("timestamp");
        Comment comment = new Comment(id, thought, timestamp);
        System.out.println(entity);
        comments.add(comment);
    }
    //convert funFacts to json
    String json = new Gson().toJson(comments);
    //send JSON as response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  public void doPost(HttpServletRequest request,  HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String comment = request.getParameter("comment");
    long timestamp = System.currentTimeMillis();
    Entity commentEntity = new Entity("Comment");
    commentEntity.setProperty("comment", comment);
    commentEntity.setProperty("timestamp", timestamp);
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(commentEntity);
    response.sendRedirect("/");
    }
}



 
