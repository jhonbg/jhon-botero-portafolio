import React from 'react'

// Define la interfaz para las propiedades del componente `Button`.
interface ButtonPronps{
  onClick?: () => void;
}

// Componente funcional `Button` que recibe una función `onClick` como prop opcional.
const Button: React.FC<ButtonPronps> = ({onClick}) => {
  return (
    // Renderiza un botón con estilos personalizados y asigna la función `onClick` a su evento.
    <button className='bg-primary text-secondary w-[154px] h-[52px] flex justify-center items-center text-base p-3 rounded' 
    onClick={onClick}
    >
      contratame  
      <svg 
        className='ml-2' 
        xmlns="http://www.w3.org/2000/svg" 
        width="0.75em" 
        height="0.75em" 
        viewBox="0 0 24 24"
      >
        <g 
        fill="none" 
        stroke="currentColor" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2"
        >
          <path 
          stroke-dasharray="20" 
          stroke-dashoffset="20" 
          d="M3 12h17.5"
          >
            <animate 
              fill="freeze" 
              attributeName="stroke-dashoffset" 
              dur="0.2s" 
              values="20;0"
            />
            </path>
            <path 
              stroke-dasharray="12" 
              stroke-dashoffset="12" 
              d="M21 12l-7 7M21 12l-7 -7">
            <animate 
              fill="freeze" 
              attributeName="stroke-dashoffset" 
              begin="0.2s" 
              dur="0.2s" 
              values="12;0"
            />
          </path>
        </g>
      </svg>
    </button>
  )
}

// Componente funcional `IconButton` que recibe un ícono y un enlace como props.
const IconButton = ({ icon , link}: {icon:string, link:string}) => {
  // Define una función `handleClick` que redirige al usuario a la URL especificada en `link`.
  const handleClick = () =>{
    window.location.href = link;
  };
  return (
    <button onClick={handleClick} className="rounded-full bg-primary w-12 h-12 flex items-center justify-center">
      <img src={icon} alt="icon" className="w-[28px] h-[28px] object-contain"/>
    </button>
  );
};

// Exporta los dos componentes para que puedan ser utilizados en otros archivos.
export {Button , IconButton}
