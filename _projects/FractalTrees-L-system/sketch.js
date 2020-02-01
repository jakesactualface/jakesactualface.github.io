// Coding Challenge #16
// Fractal Trees - L-system
// Written by Jake Everhart, challenge given by Daniel Shiffman

let angle;
const axiom = "F";
let sentence = axiom;
let len = 100;

let rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}


function generate()
{
  len *= 0.5;
  let nextSentence = "";
  for (let i = 0; i < sentence.length; i++)
  {
    let current = sentence.charAt(i);
    let found = false;

    for (let j = 0; j < rules.length; j++)
    {
      if (current == rules[j].a)
      {
        found = true;
        nextSentence += rules[j].b;
        break;
      }

      if (!found)
      {
        nextSentence += current;
      }
    }

  }

  sentence = nextSentence;
  createP(sentence).parent("project-view");
  turtle();
}

function turtle()
{
  resetMatrix();
  translate(width/2, height);
  stroke(255, 100);

  for (let i = 0; i < sentence.length; i++)
  {
    let current = sentence.charAt(i);

    if (current == "F")
    {
      line(0, 0, 0, -len);
      translate(0, -len);
    }
    else if (current == "+")
    {
      rotate(angle);
    }
    else if (current == "-")
    {
      rotate(-angle);
    }
    else if (current == "[")
    {
      push();
    }
    else if (current == "]")
    {
      pop();
    }
  }
}

function setup()
{
  let canvas = createCanvas(400, 400);
  canvas.parent("project-view");
  angle = radians(25);
  background(51);
  
  let button = createButton("generate");
  button.parent("project-view");
  button.mousePressed(generate);

  createP(axiom).parent("project-view");
  turtle();
}
