const TitlePrincipalPrimary = ({ title }: { title: string }) => {
    return (
        <h1 className='text-primary text-5xl font-semibold'>
            {title}
        </h1>
    );
};

const TitlePrincipalSecondary = ({ title }: { title: string }) => {
    return (
        <h1 className='text-secondary text-[42px] font-semibold'>
            {title}
        </h1>
    );
};

const TitleSegundario = ({ title }: { title: string }) => {
    return (
        <h2 className='text-secondary text-[32px] font-semibold'>
            {title}
        </h2>
    );
};

const TitleTerciarioPrimary = ({ title }: { title: string }) => {
    return (
        <h4 className='text-primary text-lg font-medium flex flex-row items-end'>
            {title}
        </h4>
    );
};

const TitleTerciarioSecondary = ({ title }: { title: string }) => {
    return (
        <h4 className='text-secondary text-lg font-medium'>
            {title}
        </h4>
    );
};

const TitleCuarnario = ({ title }: { title: string}) => {
    return (
        <h6 className="text-tertiary text-[16px]">
           {title} 
        </h6>
    );
};

const TextPrincipalTertiary = ({ text }: { text: string }) => {
    return (
        <p className='text-tertiary text-[15px]'>
            {text}
        </p>
    );
};

const TextPrincipalSecondary = ({ text }: { text: string }) => {
    return (
        <p className='text-secondary text-[15px]'>
            {text}
        </p>
    );
};

const Date = ({ date }: { date: string }) => {
    return (
        <p className='text-white bg-primary text-[10px] w-[111px] h-[18px] text-center'>
            {date}
        </p>
    )
}

export {TitlePrincipalPrimary,TitlePrincipalSecondary, TitleSegundario, TitleTerciarioPrimary , TitleTerciarioSecondary , TextPrincipalSecondary, TextPrincipalTertiary, Date}