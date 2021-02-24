import { Card, Col, Tooltip } from 'antd';
import React, { Component } from 'react';
import { getMovie } from "../components/Actions/MoviesAction";
import history from "../History";
import { connect, } from 'react-redux';

class ItemCard extends Component {
    funcClicked = () => {

        if (history.location.pathname === '/TVshows')
            history.push(`/tv/${this.props.data.id}`);
        else
            history.push(`/movie/${this.props.data.id}`);
    }
    render() {
        const { data } = this.props;
        const { original_title, name, title, release_date, first_air_date, poster_path, id } = data;
        var posterImage;
        if (poster_path != null)
            posterImage = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
        else
            posterImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'

        return (
            <>
                <Col>
                    <Tooltip title={original_title}>
                        <Card
                            key={id}
                            style={{ width: '220px' }}
                            onClick={() => this.funcClicked()}
                            hoverable
                            cover={
                                <img
                                    alt="content_photo"
                                    src={posterImage} />
                            }>
                            <Card.Meta title={title || name} description={release_date || first_air_date} />
                        </Card>
                    </Tooltip>
                </Col>
            </>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getMovie: id => dispatch(getMovie(id))
    }
}
export default connect(null, mapDispatchToProps)(ItemCard);