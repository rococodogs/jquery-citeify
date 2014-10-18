(function( $ ) {

    $.fn.citeify = function citeify() {
        return this.each(function() {
            var $quote = $(this)

            $quote.find('q').each(function(idx, el) {                
                var $self = $(this)                  
                  , cite = $self.attr('cite')
                  , contents
                  ;
                  
                if ( cite ) {
                    contents = $self.html();
                    $self.html('').append($('<a/>', {
                        href: cite,
                        html: contents
                    }));
                } 
                
            });
        })
    }

})( jQuery );