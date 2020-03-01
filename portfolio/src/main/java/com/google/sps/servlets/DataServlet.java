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

  private List<String> funFacts;

  @Override
  public void init() {
    funFacts = new ArrayList<>();
    funFacts.add("Kevin Durant is my favorite basketball player.");
    funFacts.add("I got my first computer when I was 18.");
    funFacts.add("Python is my favorite programming language.");
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //convert funFacts to json
    String json = new Gson().toJson(funFacts);
    //send JSON as response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  
}



 
