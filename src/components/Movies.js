import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, getSearchMovies, getSearchTvShows, getTvShows } from '../components/Actions/MoviesAction';
import history from '../History'
import ItemCard from './ItemCard';
import { Pagination, Result, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import { PopulerCards } from '../Style/MainPageStyle';

class Movies extends Component {
    state = {
        searchValue: "",
    }
    componentDidMount() {

        const searchparam = new URLSearchParams(history.location.search)
        const page = searchparam.get('page')
        const search = searchparam.get('search')
        this.setState({ searchValue: search });
        this.func(page, search)
    }

    func = (page = 1, search) => {

        if (history.location.pathname === "/Movies" || history.location.pathname === "/") {
            if (search) {
                this.props.getSearchMovies(search, page);
            }
            else
                this.props.getMovies(page);
        } else if ((history.location.pathname === "/TVshows")) {
            if (search)
                this.props.getSearchTvShows(search, page);
            else
                this.props.getTvShows(page);
        }
    }
    SetPage = (page) => {
        const searchparam = new URLSearchParams(history.location.search)
        const searchval = searchparam.get('search')
        const params = { page }
        if (searchval)
            params.search = searchval

        const pagesearch = new URLSearchParams(params).toString()
        history.push(`?${pagesearch}`);
        this.func(page, searchval)
    }
    onSearch = (search) => {
        if (search) {
            const searchval = new URLSearchParams({ page: 1, search }).toString()

            if (history.location.pathname === "/TVshows")
                history.push(`?${searchval}`);
            else
                history.push(`/Movies?${searchval}`);

            this.func(1, searchval)
        }


    }
    render() {
        const { searchValue } = this.state;
        if (this.props.data.isError || this.props.data.total_pages < this.props.data.page) {
            return <Result
                status="warning"
                title="Sorry ,data not found"
                subTitle="Error to Find Your Request" />
        }
        return (
            <>
                <PopulerCards >
                    <div style={{ display: 'flex' }}>

                        <Pagination defaultCurrent={1} current={this.props.data.page} total={this.props.data.total_pages * 10} onChange={this.SetPage} />
                        <Search style={{ width: 300 }}
                            value={searchValue}
                            onChange={(e) => this.setState({ searchValue: e.target.value })}
                            placeholder="input search text"
                            onSearch={this.onSearch} enterButton />

                    </div>
                    <Row justify='space-around' style={{ margin: '20px' }} gutter={[40, 20]} >
                        {this.props.data.results ?
                            this.props.data.results.map((data) => {
                                return (
                                    <ItemCard key={data.id} data={data} />
                                );
                            })
                            : console.log()
                        }
                    </Row>
                </PopulerCards>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies.data,
        id: state.movies.id,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (page) => dispatch(getMovies(page)),
        getSearchMovies: (search, page) => dispatch(getSearchMovies(search, page)),
        getTvShows: (page) => dispatch(getTvShows(page)),
        getSearchTvShows: (search, page) => dispatch(getSearchTvShows(search, page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);

