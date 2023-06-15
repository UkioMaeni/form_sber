import React,{FC,useState} from 'react';
import InputMask from 'react-input-mask';
import s from "../index.module.css"

export enum TypeEnum{
    Number = "number",
    Email = "email",
}
interface  IInputWithLabel{
    label: String;
    type: TypeEnum;
    //
}

const InputWithLabel:FC<IInputWithLabel> = ({label,type}) => {

    const [text, setText] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className={s.input_label}>
            <div className={s.label_text}>
                {label}
            </div>
            {type===TypeEnum.Number
             ?<InputMask
                    mask={"+7 (999) 999-99-99"}
                    placeholder="+7"
                    value={text}
                    onChange={handleInputChange}
                />
             :<input
                 value={text}
                 onChange={handleInputChange}
              />
            }
        </div>
    );
};

export default InputWithLabel;