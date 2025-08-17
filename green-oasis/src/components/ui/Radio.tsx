import { Radio as AntRadio, Button, RadioProps, CheckboxRef } from 'antd';
import { forwardRef } from 'react';
import { Group } from 'antd/es/radio';

export { Button, Group };
type CompoundedComponent = typeof AntRadio & {
    Group: typeof Group;
    Button: typeof Button;
};

// @ts-ignore
const Radio : CompoundedComponent = Object.assign(
    forwardRef<CheckboxRef, RadioProps>((props, ref) => {
        const DEV_CLASS = 'signLW';
        const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};

        return <AntRadio {...newProps} ref={ref}/>;
    }), 
    {
        Group: Group,
        Button: Button
    }
);


export default Radio;