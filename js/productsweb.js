$(window).on('load' ,function(){
		$('#docs-menu').affix({
			offset:{
				top: $('#docs-header').outerHeight() + 15
			}
		});


		


		$('#noty-floating').on('click', function(){
			$.niftyNoty({
				type: 'info',
				container : 'floating',
				title : 'You have\'ve got 30 Messages',
				message : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
				closeBtn : false,
				timer : 5000
			});
		});


		$('#demo-noty-page').on('click', function(){
			$.niftyNoty({
				type: 'danger',
				icon : 'fa fa-bolt fa-2x',
				container : 'page',
				title : 'Server Load Limited',
				message : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
			});
		});


		$('#demo-noty-panel').on('click', function(){
			$.niftyNoty({
				type: 'danger',
				container : '#demo-panel-alert',
				html : '<h4 class="alert-title">Oh snap! You got an error!</h4><p class="alert-message">Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p><div class="mar-top"><button type="button" class="btn btn-danger" data-dismiss="noty">Close this notification</button></div>',
				closeBtn : false
			});
		});





		
});
