// Título con color primario, tamaño de fuente grande y estilo seminegrita.
const TitlePrincipalPrimary = ({ title }: { title: string }) => {
    return (
        <h1 className='text-primary text-5xl font-semibold'>
            {title}
        </h1>
    );
};

// Título con color secundario y un tamaño específico.
const TitlePrincipalSecondary = ({ title }: { title: string }) => {
    return (
        <h1 className='text-secondary text-[42px] font-semibold'>
            {title}
        </h1>
    );
};


// Título secundario con color secundario y tamaño específico.
const TitleSegundario = ({ title }: { title: string }) => {
    return (
        <h2 className='text-secondary text-[32px] font-semibold'>
            {title}
        </h2>
    );
};

// Título terciario con color primario y con estilo  específico.
const TitleTerciarioPrimary = ({ title }: { title: string }) => {
    return (
        <h4 className='text-primary text-lg font-medium flex flex-row items-end'>
            {title}
        </h4>
    );
};

// Título Terciario con color secundario y con estilo específico.
const TitleTerciarioSecondary = ({ title }: { title: string }) => {
    return (
        <h4 className='text-secondary text-lg font-medium'>
            {title}
        </h4>
    );
};

//  Texto principal con color de letra terciario
const TextPrincipalTertiary = ({ text }: { text: string }) => {
    return (
        <p className='text-tertiary text-[15px]'>
            {text}
        </p>
    );
};

// Texto principal con color de letra secundario
const TextPrincipalSecondary = ({ text }: { text: string }) => {
    return (
        <p className='text-secondary text-[15px]'>
            {text}
        </p>
    );
};

// Texto para manejo de fechas con su estilo específico
const Date = ({ date }: { date: string }) => {
    return (
        <p className='text-white bg-primary text-[10px] w-[111px] h-[18px] text-center'>
            {date}
        </p>
    )
}

// Exporta todos los componentes para que puedan ser utilizados en otros archivos.
export {TitlePrincipalPrimary,TitlePrincipalSecondary, TitleSegundario, TitleTerciarioPrimary , TitleTerciarioSecondary , TextPrincipalSecondary, TextPrincipalTertiary, Date}