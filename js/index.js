
//document ready begins
$(document).ready(function(){
	var array = [];
	var entry='';
    var answer='';
    var previous='';
    var bValue=0;
    var final='';
	$('button').click(function(){
		entry = $(this).val();
		
	    if(!isNaN(entry)||entry=='.'&&bValue!=='.'){
	    	if(entry=='.'&&answer.indexOf('.')>=0){
	    		answer = answer;
	    	}else{
	    		answer += entry;
	    	}
	    	
	    	if(bValue=='='){
	    		$('.history').html(0);
	    	}
	    	
	    	$('.answer').html(answer);
	    	array = answer.split('');
	        if (array.length>12){
		        $('.answer').html('limit reached');
		        answer = '';
		        bValue = 0;
            }
            bValue = entry;
	    }
	    
	    else if(entry == '+'||entry=='-'||entry=='*'||entry=='/'){
	    	
	    	array = previous.split('');
	        if (array.length>25){
		        $('.answer').html('limit reached');
		        $('.history').html(0);
		        answer = '';
		        bValue = 0;
		        previous = '';
            }
            if(bValue=='='||bValue=='.'){
            	previous = answer + entry;
            	$('.history').html(previous);
	    		$('.answer').html(entry);
	    		answer = '';
	    		bValue=entry;
            }
	    	if(!isNaN(bValue)&&bValue!==0){
	    		//array.push(answer);
	    		//array.push(entry);
	    		previous +=  answer + entry;
	    		$('.history').html(previous);
	    		$('.answer').html(entry);
	    		answer = '';
	    		bValue=entry;
	    		console.log(bValue);
	    	}
	    }
	    else if(entry=='='&&!isNaN(bValue)){
	    	//array.push(answer);
	    	previous += answer;
	    	if(previous){
	    		$('.history').html(previous);
	    	}else{
	    		previous = 0;
	    		$('.history').html(previous);
	    	}
	    	
	    	final = eval(previous);
	    	answer = display(final);
	    	$('.answer').html(answer);
	    	$('.history').html(answer);
	    	
	    	bValue=entry;
	    	array = answer.toString().split('');
	    	if(array.length>12){
	    		$('.answer').html('limit reached');
	    		$('.history').html(0);
	    		answer = '';
	    		bValue = 0;
	    		previous = '';
	    		final = '';
	    	}
	    	
	    }
	    else if(entry =='clearall'){
	    	entry = '';
	    	previous = '';
	    	answer = '';
	    	bValue = 0;
	    	final = '';
	    	$('.answer').html(0);
	    	$('.history').html(0);
	    }
	    else if(entry == 'clearans' && bValue !== '.'){
	    	entry = '';
	    	answer = '';
	    	bValue = 0;
	    	$('.answer').html(0);
	    }
	    
	});
	
});
function display(final){
	return +(Math.round(final+'e+2')+'e-2');
}