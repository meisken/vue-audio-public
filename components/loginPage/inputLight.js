export const inputLight ={
    methods: {
        inputTitleColor(index){
            //var self = this;
            var object = document.querySelectorAll('.loginContent form span');
            var inputArea = document.querySelectorAll('.loginContent form input');

       

            object.forEach(obj => {
                obj.style.color = 'rgba(0, 0, 0, 0.5)';
                
            });
            inputArea.forEach(obj => {
                obj.style.border = 'solid 1px gray';
            })

            object[index].style.color = 'rgba(80, 71, 199, 1)';
            inputArea[index].style.border = 'solid 1.5px rgba(80, 71, 199, 1)';

        }        
    }
}