class Planet{

  constructor(x,y,width,imagename){

      var options = {

          'isStatic':false

        };

        this.width = width;

        this.width = width;

        this.image = loadImage(imagename);

        this.body = Bodies.rectangle(x,y,width,width,options);

        World.add(world,this.body);

      }

    display(name){

      angleMode(DEGREES);

     this.body.angle += 0.01;

     push();

     translate(width/2,height/2);

     rotate(this.body.angle);

     image(this.image,this.body.position.x,this.body.position.y,this.width,this.width);

     imageMode(CENTER);

    }

  }  