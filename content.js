class AppSelectingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
        //   var spec = "https://gist.githubusercontent.com/hvo/8febd426e3d12bd430aedc0cd8dd1d41/raw/766342b5a84455fb941607eede525a3b7193946a/DV_Lab7.vg.json";
//     spec = `http://SERVER_LOCATION/${this.state.platform}/${this.state.rating}`;
    var spec = '/vis/'+this.state.zipcode;
    vegaEmbed('#vis', spec, {actions:false});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
         Zipcode &nbsp;
          <input
            type='text'
            name='zipcode'
            value={this.state.zipcode}
            onChange={this.handleChange} />

        </label> &nbsp; &nbsp;
        <input type="submit" value="Update" />
      </form>
    );
  }
}

ReactDOM.render(
  <div>
    <AppSelectingForm />
  </div>,
  document.getElementById('ui')
);

