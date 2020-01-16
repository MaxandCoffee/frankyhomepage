//export function init() {
//(function(){
    var interval
    
    interval = setInterval(function () {
      if (document.querySelector('button[data-carousel-autoplay]').getAttribute('aria-pressed') === 'true') {
        return document.querySelector("button[data-carousel-direction='next']").click();
      }
    }, 4000);

export function addEventListeners() {

    var directionButtons = document.querySelectorAll('button[data-carousel-direction]');
    
    for (var i=0; i < directionButtons.length; i++) {
        
       directionButtons[i].addEventListener('click', function (event) {
          var all_panels,
            button,
            upcoming_panel,
            carousel_id,
            current_index,
            direction,
            max_index,
            upcoming_index,
            current_panel;

          button = event.target;
          carousel_id = button.getAttribute('data-carousel-id');
          direction = button.getAttribute('data-carousel-direction');
          all_panels = document.querySelectorAll('input[name="' + carousel_id + '"]');
          current_panel = function() {
              
              for (var i=0; i < all_panels.length;i ++){
                  if ( all_panels[i].checked ) {
                    return all_panels[i];
                  }
              }
             };
          max_index = all_panels.length - 1;
          current_index = function index() {
                    for (var i = 0; i < all_panels.length; i++) {
                        if (all_panels[i] == current_panel()) {
                            return i;
                        }
                    }
                };
           current_index = current_index();
          upcoming_index =
            direction === 'previous'
              ? current_index === 0 ? max_index : current_index - 1
              : current_index === max_index ? 0 : current_index + 1;
          upcoming_panel = all_panels[upcoming_index];
           
          upcoming_panel.checked = true;
           panalChange(null, current_panel());
           
          var alerts = document.getElementById('alerts');
              alerts.innerHTML = '<div role="alert">Showing panel' + upcoming_index + 1 + 'of ' + max_index + 1 + '</div>';

          return setTimeout(function () {
            return  document.getElementById('alerts').innerHTML = '';
          }, 2000);

        })
    }
        
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    
    for (var i=0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', panalChange);
    }

    function panalChange(event, button) {
        
          var current_radiobutton, current_panel_id, current_radiobutton_name, slidePanel;
        
        if(!event){
           current_radiobutton = button;
        } else {
           current_radiobutton = event.target; 
        }
          
          current_radiobutton_name = current_radiobutton.getAttribute('name');
          current_panel_id = current_radiobutton.getAttribute('value') + '_panel';
          slidePanel = function() {
              var elements = document.querySelectorAll('[name="' + current_radiobutton_name +'"]');
              
              for (var i = 0; i < elements.length; i++) {
                var panel, radiobutton, panel_id;

                radiobutton = elements[i];
                panel_id = radiobutton.getAttribute('id') + '_panel';
                panel = document.getElementById(panel_id);
                if (panel_id === current_panel_id) {
                   panel.style.display = 'block';
                } else {
                    panel.style.display = 'none';
                }
              };
          }

          return slidePanel();
 
    }

    
    document.querySelector('button[data-carousel-autoplay]').addEventListener('click', function (e) {
      var button, status;
        
      button = e.target
      console.log(button.getAttribute('aria-pressed'));
      status = button.getAttribute('aria-pressed') === 'true' ? 'false' : 'true';
        
      return button.setAttribute('aria-pressed', status);
    })
}

