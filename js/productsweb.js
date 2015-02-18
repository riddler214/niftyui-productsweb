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
				title : 'Notification',
				message : 'You have clicked Dashboard!',
				closeBtn : true,
				timer : 5000
			});
		});


		$('#noty-page').on('click', function(){
			$.niftyNoty({
				type: 'danger',
				icon : 'fa fa-bolt fa-2x',
				container : 'page',
				title : 'Error',
				message : 'Daily Reports are not yet implemented.',
				timer : 5000
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
