import React from 'react';
import {Input, Button} from '../../components'

const InputPage = () => {
    return (
        <div style={{ width: "60%", margin: "3% auto" }}>
            <div style={{ display: 'flex', margin: "20px 0" }}>
                <div>
                    <Input placeholder="this is a placeholder"/>
                </div>
                <div style={{ padding: '0 0 0 10px' }}>
                    <Button bgColor="#e42c64" fontColor="#fff">
                        Button
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', margin: "20px 0" }}>
                <div>
                    <Input placeholder="this is a placeholder" iconLeft="icon-fi-rr-shopping-cart"/>
                </div>
                <div style={{ padding: '0 0 0 10px' }}>
                    <Button bgColor="#e42c64" fontColor="#fff">
                        Button
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', margin: "20px 0" }}>
                <div>
                    <Input placeholder="this is a placeholder" type='password' iconRight="icon-fi-rr-unlock"/>
                </div>
                <div style={{ padding: '0 0 0 10px' }}>
                    <Button bgColor="#e42c64" fontColor="#fff">
                        Button
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', margin: "20px 0" }}>
                <div>
                    <Input disabled placeholder="this is a placeholder" type='password' iconLeft="icon-fi-rr-shopping-cart"/>
                </div>
                <div style={{ padding: '0 0 0 10px' }}>
                    <Button bgColor="#e42c64" fontColor="#fff">
                        Button
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InputPage;