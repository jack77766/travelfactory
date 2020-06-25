$(document).ready(function() {

    let cardsNum = 0;

    let cards = [
        {
            image: '/Assets/john-smith.jpg',
            position: 'Graphics designer',
            name: 'John Smith',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        },

        {
            image: '/Assets/alex jonathan.jpg',
            position: 'CEO',
            name: 'Alex jonathan',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        },

        {
            image: '/Assets/monica smith.jpg',
            position: 'Marketing manager',
            name: 'Monica Smith',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        },

        {
            image: '/Assets/michael zimber.jpg',
            position: 'Sales manager',
            name: 'Michael Zimber',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        },

        {
            image: '/Assets/sandra smith.jpg',
            position: 'Graphics designer',
            name: 'Sandra Smith',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        },

        {
            image: '/Assets/janeth carton.jpg',
            position: 'Graphics designer',
            name: 'Janeth Carton',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        },

        {
            image: '/Assets/john-smith.jpg',
            position: 'Graphics designer',
            name: 'John Smith',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        },

        {
            image: '/Assets/alex jonathan.jpg',
            position: 'CEO',
            name: 'Alex jonathan',
            location: 'Riviera State 32/106',
            company: 'Twitter, Inc',
            address1: '795 Folsom Ave, Suite 600',
            address2: 'San Francisco, CA 94107',
            phone: 'P: (123) 456-7890'
        }

    ]

    //ADD ALL GIVEN CARDS INTO PAGE
    $.each(cards, function(i, card) {
        console.log(card);
        $('#cards-section').append(`
        <div id='card${cardsNum}' class="card">
            <div id='pic' class="pic">
                <img src='${card.image}' alt="">
                <input type="text" id="position" class='position' value='${card.position}'>
            </div>

            <div id="info" class="info">
                <input type="text" id='name'     class="name"     value='${card.name}'>
                <input type="text" id='location' class="location" value='${card.location}'>

                <input type="text" id="company"  class="company"  value='${card.company}'>
                <input type="text" id="address1" class="address1" value='${card.address1}'>
                <input type="text" id="address2" class="address2" value='${card.address2}'>
                <input type="text" id="phone"    class="phone"    value='${card.phone}'>
            </div>

            <div id="buttons" class="buttons">

                <img id='pencil' src="/Assets/pencil.png" alt="" srcset="">
                <img id='trash'  src="/Assets/trash.png" alt="" srcset="">
                <!-- <i id="pencil" class="pencil far fa-eye"></i>
                <i id="trash" class="trash far fa-eye"></i> -->
            </div>
        </div>
        `);//append
        cardsNum++;
    })


    //MAKE CARD TEXT LOCKED 
    $(':text').attr('readonly', 'true');

    //ADD THE ADD CARD OPTION AT THE END
    $('#cards-section').append(`
        <div id='addCard' class="addCard">
            <button id='addButton' class='addButton'>Add</button>
        </div>
    `);

    //function to add a new card
    function addCard(event) {
        $('#addCard').remove();
        $('#cards-section').append(`
        <div id='card${cardsNum}' class="card">
            <div id='pic' class="pic">
                <img src='/Assets/janeth carton.jpg' alt="">
                <input type="text" id="position" class='position' placeholder='enter position'>
            </div>

            <div id="info" class="info">
                <input type="text" id='name'     class="name"     placeholder='enter name'>
                <input type="text" id='location' class="location" placeholder='enter location'>

                <input type="text" id="company"  class="company"  placeholder='enter company'>
                <input type="text" id="address1" class="address1" placeholder='enter address1'>
                <input type="text" id="address2" class="address2" placeholder='enter address2'>
                <input type="text" id="phone"    class="phone"    placeholder='enter phone'>
            </div>

            <div id="buttons" class="buttons">

                <img id='pencil' src="/Assets/pencil.png" alt="" srcset="">
                <img id='trash'  src="/Assets/trash.png" alt="" srcset="">
                <!-- <i id="pencil" class="pencil far fa-eye"></i>
                <i id="trash" class="trash far fa-eye"></i> -->
            </div>
        </div>
        `);//append

        //validate phone if enter ir pressed
        $('#card'+cardsNum+" #phone").on('keydown', function(e){
            if(e.key === 'Enter') {
                console.log("Phone was changed")
                let phone = e.target.value;
                console.log(phone);
                const regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
                if(!regex.test(phone)) {
                    alert("Please enter a valid phone number");
                }
                
            }
        } );
        //validate phone if user clicks elsewhere
        $('#card'+cardsNum+" #phone").blur(function(e){     
                console.log("Phone was changed")
                let phone = e.target.value;
                console.log(phone);
                const regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
                if(!regex.test(phone)) {
                    alert("Please enter a valid phone number");
                }       
        } );


        //activate trash button
        $('#card'+cardsNum+ ' #trash').click(function(e) {
            let card = '#' + e.target.parentElement.parentElement.id;
            // console.log("clicked: " + card)
            $(card).remove();
        });


        //lock card
        $('#card'+cardsNum).blur(function(e){ 
            console.log('locking card');
            $('#card'+cardsNum+ ' :text').attr('readonly', true);

        });


        cardsNum++;

        $('#cards-section').append(`
            <div id='addCard' class="addCard">
                <button id='addButton' class='addButton'>Add</button>
            </div>
        `);

        $('#addCard #addButton').click(function(e) {
            addCard(e);
            
        });
    }

    //CREATE A NEW CARD WHEN ADD CARD IS CLICKED
    $('#addCard #addButton').click(function(e) {
        addCard(e);
        
    });




    //Validate phone if enter is pressed
    $('#buttons #pencil').click(function(e) {
        let card = '#' + e.target.parentElement.parentElement.id;
        // console.log("clicked: " + card)
        $(card + ' :text').attr('readonly', false);
        $(card + ' #phone').on('keydown', function(e){
            if(e.key === 'Enter') {
                console.log("Phone was changed")
                let phone = e.target.value.slice(3);
                console.log(phone);
                const regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
                if(!regex.test(phone)) {
                    alert("Please enter a valid phone number");
                }
                
            }
        } )
    });
    //validate phone if we click elsewhere
    $('#buttons #pencil').click(function(e) {
        let card = '#' + e.target.parentElement.parentElement.id;
        // console.log("clicked: " + card)
        $(card + ' :text').attr('readonly', false);
        $(card + ' #phone').blur(function(e){
            console.log("Phone was changed")
            let phone = e.target.value.slice(3);
            console.log(phone);
            const regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
            if(!regex.test(phone)) {
                alert("Please enter a valid phone number");
            }
        } )
          //lock card
          $(card).blur(function(e){ 
            console.log('locking card');
            $(card + ' :text').attr('readonly', true);

        });
    });


    $('#buttons #trash').click(function(e) {
        let card = '#' + e.target.parentElement.parentElement.id;
        // console.log("clicked: " + card)
        $(card).remove();
    });

})