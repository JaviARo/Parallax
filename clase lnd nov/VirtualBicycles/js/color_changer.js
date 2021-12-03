AFRAME.registerComponent('color-changer', {
    schema: {
      colorEnter: {type: 'string'},
      colorLeave: {type: 'string'}
    },
  
    init: function () {
      // Do something when component first attached.
      const el = this.el; // Elemento
      const colorEnter = this.data.colorEnter;
      const colorLeave = this.data.colorLeave;
      el.addEventListener("mouseenter", function(){
        el.setAttribute("material", "color", colorEnter);
      });
      
      el.addEventListener("mouseleave", function(){
        el.setAttribute("material", "color", colorLeave);
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