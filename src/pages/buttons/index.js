import React, {useState} from 'react';
import {Button} from '../../components';


const ButtonPage = () => {
    
    return (
        <div style={{ width: "60%", margin: "3% auto" }}>
            <div style={{ margin: '60px 0' }}>
                <div>
                    <p>Full Block Buttons</p>
                </div>
                <Button spacing="0 10px 0 0" bgColor="#FFF">Click me</Button>
                <Button spacing="0 10px 0 0" bgColor="#F6B352" fontColor="#fff">Click me</Button>
                <Button spacing="0 10px 0 0" bgColor="#FAFAFA">1</Button>
                <Button outlined bgColor="#31B96E" spacing="0 10px 0 0">Outlined</Button>
                <Button naked fontColor="#6600CC" >Outlined</Button>
            </div>
            <div style={{ margin: '60px 0' }}>
                <div>
                    <p>Full Round Buttons</p>
                </div>
                <Button round spacing="0 10px 0 0" bgColor="#FFF">Click me</Button>
                <Button round spacing="0 10px 0 0" bgColor="#F6B352" fontColor="#fff">Click me</Button>
                <Button round spacing="0 10px 0 0" bgColor="#FAFAFA">1</Button>
                <Button round outlined bgColor="#31B96E" spacing="0 10px 0 0">Outlined</Button>
                <Button round naked fontColor="#6600CC" >Outlined</Button>
            </div>
            <div style={{ margin: '60px 0' }}>
                <div>
                    <p>Full Outline Round and Block Buttons</p>
                </div>
                <Button round outlined spacing="0 10px 0 0" bgColor="#F6B352" fontColor="#fff">Click me</Button>
                <Button outlined spacing="0 10px 0 0" bgColor="#373737">1</Button>
                <Button outlined bgColor="#31B96E" spacing="0 10px 0 0">Outlined</Button>
                <Button outlined naked fontColor="#6600CC" >Outlined</Button>
            </div>
        </div>
    )
}

export default ButtonPage