new Vue({
  // By specifying the HTML id in this el, the instance of Vue.js will be imported in the DOM of that id.
  el: '#app',
  // data is an attribute (value) of the defined Vue.js instance
  data: {
    name: 'A mountain B ro',
    course: 'Web Engineer coursee',
    acceptancePeriod: 'January 2019',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Hiroyoshi Noro', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
      { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer coursee', acceptancePeriod: 'November 2017' },
      { id: 3, name: 'Kazuki Saito', course: 'Web Engineer coursee', acceptancePeriod: 'November 2017' }
    ]
  },
  // In methods, describe the method you want to use for the instance of Vue.js
  methods: {
    addStudent: function() {
        // AddStudent method in this function () {}
        this.defaultLastId += 1;
        instance = { id: this.defaultLastId, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod };
        this.students.push(instance);
        //console.log(this.students)
        this.name = " ";
        this.course = " ";
        this.acceptancePeriod = " ";
    }
  }
})
