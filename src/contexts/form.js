import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
export const FormContext = createContext({});

function FormProvider ({children}){
    const [user, setUser]=useState({});
    const navigation = useNavigation()

    function Cadastro (nome, tel, doc, endereco, restricao){
        if(nome !== '' && tel !== '' && doc !== '' && endereco !== '' && restricao !== ''){
            setUser({
                nome:nome,
                tel:tel,
                doc:doc,
                endereco:endereco,
                restricao:restricao

            })

            navigation.navigate("RevisaoInformacao")
        }

        
    }

    return(
        <FormContext.Provider value={{Cadastro, user}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;