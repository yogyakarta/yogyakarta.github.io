var app = {}; 

var tasks = new Bloodhound({
        datumTokenizer: function(d) { return             Bloodhound.tokenizers.whitespace(d.item); 
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        //list of tasks used for autucomplete
         local: [
         {item: "	1314096	Alifatun Nasyrochah	اليفة النشرحة	NR	ULYA C	"},
                {item: "wash the cat"},
                {item:"watch 'Curb your enthusiasm'"},
                {item:"buy milk"},
                {item:"call your parents"}, 
                {item:"take your goldfish to the vet"}, 
                {item:"run an ultra-marathon"},
                {item:"pick up a new xylophone"},
                {item:"marry Gael Garcia Bernal"}
                ]
    });

tasks.initialize();
 
$('.typeahead').typeahead(null, {
  name: 'tasks',
  displayKey: 'item',
  source: tasks.ttAdapter()
});

    
/*---Models---*/
    app.Todo = Backbone.Model.extend({
      defaults: {
        title: '',
        completed: false
          },
       toggle: function(){
        this.save({ completed: !this.get('completed')});
        }
    });
  
 /*---Collections---*/
    app.TodoList = Backbone.Collection.extend({
      model: app.Todo,
     localStorage: new Store("backbone-todo"),
      completed: function() {
        return this.filter(function( todo ) {
          return todo.get('completed');
        });
      },
      remaining: function() {
        return this.without.apply( this, this.completed() );
      }      
    });

    // instance of the Collection
    app.todoList = new app.TodoList();
  
  /*---Views----*/
    // renders individual todo items list (li)
    app.TodoView = Backbone.View.extend({
      tagName: 'li',
      template: _.template($('#item-template').html()),
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.edit');
        return this; // enable chained calls
      },
        initialize: function(){
        this.model.on('change', this.render, this);
          this.model.on('destroy', this.remove, this); 
      },
       events: {
        'dblclick label' : 'edit',
        'keypress .edit' : 'updateOnEnter',
        'blur .edit' : 'close',
        'click .toggle': 'toggleCompleted',
        'click .destroy': 'destroy'
      },
      edit: function(){
        this.$el.addClass('editing');
        this.input.focus();
      },
      close: function(){
        var value = this.input.val().trim();
        if(value) {
          this.model.save({title: value});
        }
        this.$el.removeClass('editing');
      },
      updateOnEnter: function(e){
        if(e.which == 13){
          this.close();
        }
        },
       toggleCompleted: function(){
         this.model.toggle();
      },
    destroy: function(){
        this.model.destroy();
     }    
    });

    // renders the full list of todo items calling TodoView for each one.
    app.AppView = Backbone.View.extend({
      el: '#todoapp',
      initialize: function () {
        this.input = this.$('#new-todo');
        app.todoList.on('add', this.addAll, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.fetch(); // Loads list from local storage
      },
      events: {
        'keypress #new-todo': 'createTodoOnEnter'
      },
      createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
          return;
        }
        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input box
      },
      addOne: function(todo){
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
      },
      addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
    // filter todo item list
        switch(window.filter){
          case 'pending':
            _.each(app.todoList.remaining(), this.addOne);
            break;
          case 'completed':
           _.each(app.todoList.completed(),this.addOne);
           console.log(this);
            break;            
          default:
            app.todoList.each(this.addOne, this);
            break;
        }
        },
      
      
      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });

/*---Routers----*/
    app.Router = Backbone.Router.extend({
      routes: {
        '*filter' : 'setFilter'
      },
      setFilter: function(params) {
        console.log('app.router.params = ' + params);
        window.filter = params.trim() || '';
        app.todoList.trigger('reset');
      }
    }); 


/*-----Intializers---*/
    app.router = new app.Router();
    Backbone.history.start();    

    app.appView = new app.AppView();