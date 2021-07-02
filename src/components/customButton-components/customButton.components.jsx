import React from 'react';
import '../customButton-components/customButton.styles.scss';
class CustomButton extends React.Component{
        
        
        render(){
                console.log(this.props,"fdgdg");
                const {children,inverted,taskADD, ...props}=this.props;
                return(
                        <button className={`${inverted ? 'inverted': ''}
                        ${taskADD ? 'taskADD' : ''} 
                        todo-button`} {...props}
                        >{children}</button>
                );
        }
}
export default CustomButton; 
