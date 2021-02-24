
import { Card, Result, Row, Spin } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCast } from './Actions/CastAction';
import { clearMovie, getMovie, getTvShow } from './Actions/MoviesAction';
import { ColorExtractor } from 'react-color-extractor'
import { Details, Discription, CastDiv, InnerDescription, CastMain, Tagline } from '../Style/DetailDiscriptionStyle'
class DetailDiscription extends Component {

    state = { bgColor: '#000' }

    componentDidMount() {
        if (this.props.match.path === "/movie/:id") {
            this.props.getMovie(this.props.match.params.id)
            this.props.getCast(this.props.match.params.id, 'movie')
        }
        else {
            this.props.getTvShow(this.props.match.params.id)
            this.props.getCast(this.props.match.params.id, 'tv')
        }
    }
    componentWillUnmount() {
        this.props.clearMovie();
    }

    getColors = colors => {
        const colorStr = (colors.length > 0) ? colors[colors.length - 1] : '#000000dd';
        this.setState({ bgColor: colorStr + 'dd' })
    }
    render() {
        const { cast } = this.props.castData.currentCastData;
        const { castLoading } = this.props.castData;
        var castImage = '';
        const { currentMovieData, isLoading } = this.props.data;
        // data for Movies
        const { title, original_language, release_date, poster_path, id, backdrop_path, overview, tagline } = currentMovieData;
        // data for TvShows
        const { name, first_air_date } = currentMovieData;
        const background = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`;
        var posterImage;
        if (release_date) {
            var movieyear = "(" + release_date.substring(0, 4) + ")";
        }
        if (first_air_date) {
            var tvyear = "(" + first_air_date.substring(0, 4) + ")";
        }
        if (poster_path)
            posterImage = `https://www.themoviedb.org/t/p/w300_and_h450_face${poster_path}`
        else
            posterImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
        var genres = [];
        if (currentMovieData.genres) {
            genres = currentMovieData.genres.map((data, index) => {
                if (index === 0)
                    return data.name
                else
                    return ", " + data.name
            })
        }
        if (currentMovieData.isError) {
            return <Result
                status="404"
                title="404"
                subTitle={currentMovieData.error_message + " Sorry, the page you visited does not exist."}
            />
        }

        return (
            (!isLoading && !castLoading) ?
                < >
                    <Discription style={{ backgroundImage: `url(${background})` }} >
                        <InnerDescription style={{ background: this.state.bgColor }}  >

                            <ColorExtractor getColors={this.getColors}>
                                <img
                                    style={{
                                        boxShadow: ' 2px 2px 8px #00000048', borderRadius: '4px',
                                        width: '270px',
                                        marginLeft: '45px'
                                    }}
                                    alt="content_photo"
                                    key={id}
                                    src={posterImage} />
                            </ColorExtractor>

                            <Details >
                                <Row style={{ fontSize: '35px', fontWeight: '700' }}>{title || name} {movieyear || tvyear}</Row>
                                <Row style={{ color: 'lightgray' }}> {release_date || first_air_date} ({original_language})
                                    <ul style={{ paddingLeft: '30px' }}>
                                        <li> {genres}</li>
                                    </ul>
                                </Row>

                                <Tagline >{tagline}</Tagline>
                                <Row style={{ fontSize: '27px', fontWeight: '500' }}>Overview</Row>
                                <Row style={{ paddingTop: '5px', fontSize: '16px' }}>{overview}</Row>
                            </Details>
                        </InnerDescription>

                    </Discription>
                    <div>
                        <h3 style={{ paddingTop: '10px', marginLeft: "30px", fontSize: '25px', fontWeight: '700' }}>Top Billed Cast</h3>
                    </div>
                    <CastMain>
                        <CastDiv>
                            {cast.length !== 0 ?
                                cast.map((data, index) => {

                                    if (data.profile_path != null)
                                        castImage = `https://www.themoviedb.org/t/p/w138_and_h175_face${data.profile_path}`
                                    else
                                        castImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                                    if (index < 20) {
                                        return (
                                            <Card
                                                key={data.cast_id}
                                                style={{ marginLeft: '15px', borderRadius: '7px' }}
                                                bodyStyle={{ width: '170px' }}
                                                hoverable
                                                cover={
                                                    <img
                                                        key={data.cast_id}
                                                        style={{ height: '180px', borderRadius: '5px 5px 0px 0px' }}
                                                        alt={'Cast_photo'}
                                                        src={castImage}
                                                    />
                                                }>
                                                <Card.Meta style={{ fontWeight: '500' }} title={data.original_name} description={data.character} />
                                            </Card>
                                        );
                                    }
                                })
                                : <h1 style={{ color: 'gray' }}>No Data Found</h1>
                            }
                        </CastDiv>
                    </CastMain>
                </>
                : <Spin size="large" style={{ marginLeft: '50%' }} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.movies.currentMovie,
        castData: state.cast,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        clearMovie: () => dispatch(clearMovie()),
        getMovie: (id) => dispatch(getMovie(id)),
        getCast: (id, path) => dispatch(getCast(id, path)),
        getTvShow: (id) => dispatch(getTvShow(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailDiscription));