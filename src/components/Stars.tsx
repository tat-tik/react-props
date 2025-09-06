import Star from './Star';

type StarsProps = {
    count: number;
}

function Stars({count = 0}: StarsProps ) {
    if (count < 1 || count > 5) {
        return null;
    }
    const starsArray = Array.from({length: count});

    return (
        <div className="card-body-stars u-clearfix">
            {starsArray.map((_, index) => (
                    <Star key={index}/>
                ))}
        </div>
    );
}
export default Stars
