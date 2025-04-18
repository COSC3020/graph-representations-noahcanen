# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

What is the runtime complexity of the conversion that you implemented?


I have a for loop. Which runs for the number of vortexes so n or V


I have a for loop. Inside that for loop. Which runs for the number of vortexes so n or V


So $n * n = n^2 ∈ O(n^2)$ or  $V * V = V^2 ∈ O(V^2)$


Does it depend on the number of vertices, the number of edges, or both?


It depends on the number of vertices. We have to go to each vertex and check each possible edge it could be connected to, and whether or not it's connected to one doesn't matter; we still have to check it.


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

 What is the runtime complexity of the conversion that you implemented?


I have a for loop. Which runs for the number of vortexes so V


I have a for loop. Inside that for loop. Which runs for the number of edges so E


So $V * E = V * E ∈ O(V * E)$


Does it depend on the number of vertices, the number of edges, or both?


It depends on both the number of vertices and the number of edges. We have to go to each vertex and then record what edges it has and doesn't have.



For this assignment, I used the resources of https://www.w3schools.com/js/js_arrays.asp, https://www.w3schools.com/js/js_string_methods.asp, And help from the TA

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
