import "./_Faq.scss";

const accordionArray = [
    {
        title:"¿Cómo contamina una web?",
        text:"Una web contamina de diferentes formas, desde el almacenamiento de los elementos gráficos en el servidor, la transferencia de datos realizada por el cliente al acceder a la web hasta el consumo de energía del dispositivo utilizado durante  la visita a la web.",
    },{
        title:"¿Cómo ayuda el ECO Diseño?",
        text:"El ECO Diseño ayudaría a reducir los datos almacenados, transferidos y usados durante la visita web, reduciendo con ello la cantidad de energía necesaria. No solo ayudaría en el ahorro de energía, sino también en la optimización de la propia página web, obteniendo como resultado una página eficiente."
    },{
        title:"¿Hay más opciones web ECO?",
        text:"¡Claro! También hay prácticas ECO en desarrollo web, pero por ahora solo tratamos el aspecto del diseño :)"
    },{
        title:"¿Puedo aportar ideas ECO?",
        text:"Si sabes alguna técnica más de diseño ECO, por favor, contáctame."
    },{
        title:"¿La medición CO2 es gratuita?",
        text:"Las mediciones de CO2 son completamente gratuitas e ilimitadas."
    },{
        title:"¿Os quedáis con los datos?",
        text:"No, no nos quedamos con ningún tipo de dato, esta página es meramente informativa."
    },{
        title:"Hay un problema en la web",
        text:"¿Has encontrado un problema en la web? Por favor, contáctame."
    }]


import { Accordion } from "../../components/accordion/Accordion";


export const Faq = () => (
    <>
        <main className="whiteSection mainFaq">
            <h1>Preguntas frecuentes</h1>

        </main>

        <section className="blueSection">
            <div className="accordionContainer">
                {accordionArray.map((accordion, i) => 
                    <Accordion key={i} {...accordion} /> 
                )}
            </div>
        </section>
    </>
)
