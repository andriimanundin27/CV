function showInput() {
    var a=(document.getElementById("user_input").value)*2-1
    var b=''
    var c=''
    var j
    var i
    for(i=1; i<a+1; i++){
        if((i%2)!==0){
            c+=((a-i)/2)
            for(j=0; j<c;j++){
                b+='_'
            }
    		for(j=0; j<i;j++){
    			b+='*'
    		}
    		for(j=0; j<c;j++){
    			b+='_'
    		}
    		b+='</br>'
    		c=''
    	}
    }

    for(i=a-1; i>0; i--){
    	if((i%2)!==0){
    		c+=((a-i)/2)
    		for(j=0; j<c;j++){
    			b+='_'
    		}
    		for(j=0; j<i;j++){
    			b+='*'
    		}
    		for(j=0; j<c;j++){
    			b+='_'
    		}
    		b+='</br>'
    		c=''
    	}
    }
        document.getElementById('display').innerHTML = b
}