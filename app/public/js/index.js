const SomeApp = {
  data() {
    return {
      books: [],
      offerForm:{}
    }
  },
  computed: {},
  methods: {

      fetchBookData() {
          fetch('/api/book/')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.books = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
      },

      postOffer(evt) {
          console.log ("Test:", this.selectedOffer);
        if (this.selectedOffer) {
            this.postEditOffer(evt);
        } else {
            this.postNewOffer(evt);
        }
      },
      postEditOffer(evt) {
      //  this.offerForm.id = this.selectedOffer.id;
      //  this.offerForm.studentId = this.selectedStudent.id;

        console.log("Editing!", this.offerForm);

        fetch('api/books/update.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;

            // reset the form
            this.handleResetEdit();
          });
      },

      postNewOffer(evt) {
        //this.offerForm.studentId = this.selectedStudent.id;

        console.log("Creating!", this.offerForm);

        fetch('api/book/create.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;

            // reset the form
            this.OfferForm();
          });
      },
      handleEditOffer(bookId) {
          this.selectedOffer = book;
          this.offerForm = Object.assign({}, this.selectedOffer);
      },
      handleResetEdit() {
          this.selectedOffer = null;
          this.offerForm = {};
      }
  },
  created() {
      this.fetchBookData();
  }

}

Vue.createApp(SomeApp).mount('#bookApp');
