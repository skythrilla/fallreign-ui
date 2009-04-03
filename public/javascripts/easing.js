        var query = new Object();
        window.location.search.replace(
        new RegExp( "([^?=&amp;]+)(=([^&amp;]*))?", 'g' ),
        function( $0, $1, $2, $3 ){
        query[ $1 ] = $3;
        }
        );
        easing = query['e'] || 'Bounce';
        
        function loadEasing(e) {
        location.href = location.pathname+'?e='+e;
        }
        
        function setEasing(e) {
        loadLamps(e);
        }
        
        function loadLamps(easing) {
        $('#lavaLampBasicImage').lavaLamp({
        fx: 'easeIn'+easing,
        speed: 800,
        homeTop:-1,
        homeLeft:-1
        });
        
        $('#lavaLampVariableImage').lavaLamp({
        fx: 'easeOut'+easing,
        speed: 800,
        startItem:1
        });
        
        $('#lavaLampBorderOnly').lavaLamp({
        fx: 'easeInOut'+easing,
        speed: 1000,
        returnDelay:1000
        });
        
        $('#lavaLampVertical').lavaLamp({
        fx: 'easeOut'+easing,
        speed: 1000,
        click: function() {return true;},
        setOnClick: false
        });
        
        $('#lavaLampFun').lavaLamp({
        fx: 'easeInOut'+easing,
        speed: 1000,
        autoReturn: false
        });
        
        $('#lavaLampHome').lavaLamp({
        fx: 'easeInOut'+easing,
        speed: 1000,
        returnHome: true,
        homeLeft: -100,
        homeTop: -25,
        homeWidth:700,
        homeHeight:10
        });
        }
        
        $(function() {
        $('#menu').lavaLamp({fx: 'swing', speed: 333});
        loadLamps(easing);
        
        $('select#easing option[value='+easing+']').attr('selected','selected');
        $('.easingLabel').text(easing);
        });