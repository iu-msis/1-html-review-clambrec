const Offer = {
    data() {
      return {
        "books": [],
        "offerForm": {},
        "selectedBook": null
      }
    },
    methods: {
       fetchBookData() {
           fetch('/api/book/')
           .then(response => response.json() )
           .then((parsedJson) => {
               console.log(parsedJson);
               this.books = parsedJson
           })
           .catch( (err) => {
                console.error(err);
            });
        },
        postOffer(evt) {
           if (this.selectedBook === null) {
               this.postNewOffer(evt);

           } else {
               this.postEditOffer(evt);
           }
       },
       postNewOffer(evt) {
            console.log("Creating!", this.offerForm);
            alert("Created!");
            fetch('api/book/create.php',{
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then( response => response.json() )
        .then( json => {
            console.log("Returned from post:", json);
            this.books = json;
            this.resetofferForm = {};
        });
    },

    postEditOffer(evt) {
            this.offerForm.OfferId = this.selectedBook.Id;
            this.offerForm.id = this.selectedBook.id;
            console.log("Editing!", this.offerForm);
            alert("Edited!");

            fetch('api/book/update.php',{
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
    }
})
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            this.books = json;
            this.offerForm = {};
            this.selectedBook = null;

        });
    },
    postDeleteBook(o) {

           if ( !confirm("Are you sure you want to delete the offer from " + o.title +"?") ) {
                return;
            }
            console.log("Delete!", o);

            fetch('api/book/delete.php',{
            method:'POST',
            body: JSON.stringify(o),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then( response => response.json() )
        .then( json => {
            console.log("Returned from post:", json);
            this.books = json;
            this.resetofferForm = {};
        });
    },
    selectBookToEdit(b) {
        this.selectedBook = b;
        this.offerForm = Object.assign({}, this.selectedBook);
    },
    resetofferForm() {
        this.selectedBook = null;
        this.offerForm = {};
  }
},
created() {

       this.fetchBookData ();

   } //end created

} // end Offer config

Vue.createApp(Offer).mount('#bookApp');
