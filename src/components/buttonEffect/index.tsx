import './style.css';

interface ButtonEffectProps {
    text: string;
    width?: string;
    height?: string;
    color?: string;
    onClick?: () => void;
}

export default function ButtonEffect({ text, width = "auto", height = "100px", onClick }: ButtonEffectProps) {
    return (
        <div className="box">
            <button
                className='button'
                style={{
                    width,
                    height,
                    backgroundColor: '#c7a419',
                    boxShadow: '0 0 10px 0 #ffcc00',
                    position: 'relative',
                }}
                onClick={onClick}
            >
                {text}
                <div className="aura"></div>
            </button>
        </div>
    );
}
