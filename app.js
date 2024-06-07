// app
/*
new Vue({
  el: "#app",
  data: {
    title: "Rezaul karim RK",
    isItTrue: true,
    cars: ["Ford", "Toyota"],
    robot: {
      name: "Franky",
    },
    greting: () => {
      return "This is function";
    },
  },
  methods: {
    greeting: function () {
      return "hello this is old function";
    },

    greetting: () => {
      return "hello this is old ES-6 function";
    },
    callBack: () => {
        console.log(this.title)
    },
  },
});
*/

// app1
/*
new Vue({
  el: "#app1",
  data: {
    src: "https://picsum.photos/id/237/200/300",
    alt: 'dog img',
    link: 'https://www.facebook.com/mrk99rk'
  },
});
*/

// app2
/*
new Vue({
    el: "#app2",
    data: {
        myText: 'Using v-text',
        myHtml: '<span class="font-black text-2xl" >Using v-html </span>'
    },
})
*/

// app3
/*
new Vue({
    el: "#app3",
    data: {
        user: 'Rezaul',
        userAge: 16,
        allowedAge: 18,
    },
    methods: {
        changeUser: () => {
            console.log(this.use)
            return "Rezaul";
            return this.user === "Rezaul" ? 'My Name' : "This is not me";
        }
    }
});
*/

// app4
/*
new Vue({
    el: "#app4",
    data: {
        user: 'rezaula',
    }
});
*/

// app5
/*
new Vue({
    el: "#app5",
    data: {
        cars: ['Toyota', 'BMW', 'Ferari', 'Lamborgini', 'Audi', 'Prado'],
        user: {
            name: "Rezaul Karim RK",
            age: 25,
            country: "Bangladesh",
            distric: "JoypurHat",
            maritalStatus: "Unmarrid",
            hobby: "Computer Programming",
            occapation: "Web developer",
            favoriteProgLang: "C++"
        }
    }
});
*/

// app6
/*
new Vue({
    el: "#app6",
    data: {
        name: 'Luffy'
    },
    methods: {
        update: () => {
            setTimeout(() => {
                this.name = 'Rezaul';
                console.log('Completed')
            }, 2000);
        }
    }
})
*/

// app7
/*
new Vue({
  el: "#app7",
  data: {
    name: "sabbir",
    XX: 0,
    YY: 0,
  },
  methods: {
    update(){
      this.name = "Rezaul Karim RK";
      console.log(name);
    },
    getCord(event){
        let x = event.clientX;
        let y = event.clientY;
        this.XX = x;
        this.YY = y;
        console.log(x, y);
    }
  },
});
*/

// app8
/*
new Vue({
  el: "#app8",
  data: {
    name: "Rezaul Karim RK",
  },
  methods: {
    upsateName(nname, event) {
      this.name = nname;
      console.log(event);
    },
    handleSubmit(ev){
        // ev.preventDefault();
        console.log("submited");
    }
  },
});
*/

// app9
/*
new Vue({
  el: "#app8",
  data: {
    formData: {
      firstName: "",
      lastName: ""
    },
  },
  methods: {
    handleSubmit() {
        console.log(this.formData.firstName);
        console.log(this.formData.lastName);
    },
  },
});
*/

// app10
/*
new Vue({
  el: "#app10",
  data: {
    a: 0,
    b: 0,
    salary: 10,
  },
  methods: {},
  computed: {
    addToA() {
      console.log('call A')
      return this.a + this.salary;
    },
    addToB() {
      console.log('call B')
      return this.b + this.salary;
    },
  },
});
*/

//app11
/*
new Vue({
    el: "#app11",
    data: {
        a: 0,
        link: 'http://google.com',
        name: ""
    }
});
*/

//app12
/*
const aapp11 = new Vue({
  el: "#aapp1",
  data: {
    value: "1st instance",
  },
  methods: {
    changeValue(){
      aapp22.value = "change this for instance 1"
    }
  },
});

const aapp22 = new Vue({
  el: "#aapp2",
  data: {
    value: "2nd instance"
  }
})
*/














