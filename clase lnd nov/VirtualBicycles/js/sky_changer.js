AFRAME.registerComponent('sky-changer', {
    schema: {
      src: {type: 'string'}
    },
  
    init: function () {
      // Do something when component first attached.
      const el = this.el; // Elemento
      const src = this.data.src;

      el.addEventListener("mouseenter", function(){
        document.getElementById("my-sky").setAttribute("material", "src", src);
      });
    },
    

    update: function () {
      // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
  });