
import { motion } from 'framer-motion';


const RunningText = ({
    children,
    animationTime = 20000,
    gap = 3,
    ...props
}) => {
    return (
        <div className="running-outer" {...props}>
            <div className="running-inner">
                <div className="running-text">{children}</div>
                <div className="running-text">{children}</div>
                <div className="running-text">{children}</div>
            </div>
            <style>{`
        .running-outer {
          position: relative;
          z-index: 3;
          text-transform: uppercase !important;
          padding: 0;
          overflow: hidden;
          word-break: break-word;
        }
        .running-inner {
          display: flex;
          gap: ${gap}vw;
          flex-wrap: nowrap;
          white-space: nowrap;
        }
        .running-text {
          position: relative;
          display: flex;
          gap: ${gap}vw;
          flex-wrap: nowrap;
          white-space: nowrap;
          animation: slide-har ${animationTime}ms linear infinite;
        }

        @keyframes slide-har {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
        </div>
    );
};

function Text({ children, stroke, font, style = {} }) {
    return (
        <span
            style={{
                fontSize: font || '5vw',
                fontWeight: 800,
                margin: '0 10px',
                WebkitTextStroke: stroke ? `${stroke}px ` : 'none',
                ...style,
            }}
        >
            {children}
        </span>
    );
}

export default function RunningSlogan() {
    const font = '4vw';
    return (
        <div className='mb-20'>
            <motion.div
                style={{ width: '100%'}}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <RunningText>
                    <Text stroke={1.5} font={font}><span className='primary-tx-blue-whiter'>Tigris Health</span></Text>
                    <Text font={font}><span className='primary-tx-blue-whiter'>SelfCare</span></Text>
                    <Text font={font}>Medical</Text>
                    <Text stroke={1.5} font={font}><span className='text-blue-500'>Doctors</span></Text>
                    <Text font={font}>Services</Text>
                    <Text stroke={1.5} font={font}>Specialties</Text>
                </RunningText>
            </motion.div>
        </div>
    );
}
