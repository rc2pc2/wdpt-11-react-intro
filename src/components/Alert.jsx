export default function Alert({ type, children }) {
    // const { type, children } = props;

    return (
        <div className={`alert alert-${type}`}>
            {children}
        </div>
    );
}