<html>

  <!--  
    Calclulator using PHP to calculate an expression within
      the display. It uses the POST method to read the input 
      form and prints the result into an html paragraph. 
      CSS is used to hide the paragraph, and then 
      javascript is used to read from the paragraph
      and print the result back into the display.
  -->
  
  <head>
    <title>Web-based Calculator</title>
    <link type="text/css" rel="stylesheet" href="calc.css">
  </head>
  <body>
    <br>
    
    <ul id="ulbar">
    <li id="libar"><a class="abar" href="ola1.html">Home</a></li>
    <li id="libar"><a class="abar" href="ola2.html">CV</a></li>
    <li id="libar"><a class="abar" href="ola3.html">Cash Register</a></li>
    <li id="libar"><a class="abar" href="ola4.html">Meme Generator</a></li>
    <li id="libar"><a class="abar" href="calc.php">Calculator</a></li>
  </ul>
    <br>
    <h1>Calculator.</h1>

    <div id="calculator">
      <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
    		<input type="text" name="display" id="display"><br>
    		<button type="button" onclick="clean()">C</button>
    		<button type="button" onclick="addToDisplay('(')">(</button>
    		<button type="button" onclick="addToDisplay(')')">)</button>
    		<button type="button" onclick="addToDisplay('/')">&divide</button><br>
    		<button type="button" onclick="addToDisplay('7')">7</button>
    		<button type="button" onclick="addToDisplay('8')">8</button>
    		<button type="button" onclick="addToDisplay('9')">9</button>
    		<button type="button" onclick="addToDisplay('*')">x</button><br>
    		<button type="button" onclick="addToDisplay('4')">4</button>
    		<button type="button" onclick="addToDisplay('5')">5</button>
    		<button type="button" onclick="addToDisplay('6')">6</button>
    		<button type="button" onclick="addToDisplay('-')">-</button><br>
    		<button type="button" onclick="addToDisplay('1')">1</button>
    		<button type="button" onclick="addToDisplay('2')">2</button>
    		<button type="button" onclick="addToDisplay('3')">3</button>
    		<button type="button" onclick="addToDisplay('+')">+</button><br>
    		<button id="zero" type="button" onclick="addToDisplay('0')">0</button>
    		<button type="button" onclick="addToDisplay('.')">.</button>
    		<button type="submit" name="submit">=</button>
  		</form>
    </div>
    
    <?php
		if($_SERVER["REQUEST_METHOD"] == "POST"){

      $expression = $_POST["display"];
			
			// Remove any unwanted characters
			$expression = preg_replace('/[^0-9+\-*.\/\^\(\)\s]/', '', $expression);
			// Evaluate the expression and display the result
			if (!empty($expression)) {
				eval("\$result = ($expression);");
        echo "<p id=\"result\">$result</p>";
			}
		}else{
				$result="";
		}

		?>

    
    <script>

      // Clears the display
      function clean() {
        console.log("inside Function");
        var display = document.getElementById("display");
        display.value = "";
      }

      // Adds whichever character passed to the function onto the display
      function addToDisplay(c) {
        console.log("inside Function");
        var display = document.getElementById("display");
        display.value += c;
      }

      document.getElementById("display").value = document.getElementById("result").innerHTML;

    </script>

  </body>
</html>