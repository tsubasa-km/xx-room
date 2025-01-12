export default function Room({ params }: { params: { roomId: string } }) {
    const { roomId } = params;
    
    return (
        <div>{roomId}</div>
    );
}