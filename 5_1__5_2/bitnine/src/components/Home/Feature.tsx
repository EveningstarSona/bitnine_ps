import "../../styles/Feature.css";

type FeatureProps = {
    title: string,
    paragraph: string,
    points: string[]
}

function Feature({ title, paragraph, points } : FeatureProps) {

    const rows = [];
    if(points.length)
        for (let i = 0; i < points.length; i++)
            rows.push(<p>{"- " + points[i]}</p>);

    return (
        <div className="feature-container">
            <div className="feature-front">
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
            <div className="feature-back">
                {rows}
            </div>
        </div>
    );
}

export default Feature;