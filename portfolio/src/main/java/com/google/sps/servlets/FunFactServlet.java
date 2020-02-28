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
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns a fun fact. */
@WebServlet("/fun-facts")
public final class FunFactServlet extends HttpServlet {

  private List<String> funFacts;

  @Override
  public void init() {
    funFacts = new ArrayList<>();
    funFacts.add(
        "I have never shaved my moustache");
    funFacts.add("I got my first computer when I was 18");
    funFacts.add("I am super scared of heights, almost passed out a six flags last summer");
    funFacts.add("Cereal before milk, people");
    funFacts.add("I saw Jaden Smith, Young Thug and J Cole in one night");
    funFacts.add("I have seen Khalid live too!");
    funFacts.add("I am so bad at swimming");
    funFacts.add("I'm a bad dancer too");
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String funFact = funFacts.get((int) (Math.random() * funFacts.size()));

    response.setContentType("text/html;");
    response.getWriter().println(funFact);
  }
}
