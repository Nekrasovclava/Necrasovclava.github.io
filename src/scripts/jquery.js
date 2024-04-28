$(".navigation__title").on("click", function() {
    if ( $( ".navigation__list " ).is( ":hidden" ) ) {
        $( ".navigation__list " ).slideDown( "slow" );
      } else {
        $( ".navigation__list " ).slideUp();
      }  
});