import React from 'react';
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiButton,
} from '@elastic/eui';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		
		searchTerm :'',
		response : ''
	};
  }
  onSearchTextChange(event) {
	  
	  this.state.searchTerm = event.target.value;
  }
  
  searchData(){
	 
    const { httpClient } = this.props; 
	httpClient.get('http://localhost:9200/inspections/_search?q='+this.state.searchTerm).then((resp) => {
     
	 console.log(resp.data.hits.hits[0]);
	});
	
	
  }
   

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get('../api/my_plugin_name/example').then((resp) => {
      this.setState({ time: resp.data.time });
    });
  } 
   
   
  render() {
    const { title } = this.props;
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1> Hello World!</h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle>
                <h2>Congratulations</h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiText>
                <h3>Custom Kibana Plugin!</h3>
                <p>The server time (via API call) is {this.state.time || 'NO API CALL YET'}</p>
              </EuiText>
			 <EuiForm >
				<EuiFormRow
					label="Search Field"
					helpText="Please enter search value"
				>
					<EuiFieldText name="search_term" onChange={(event) => this.onSearchTextChange(event)}/>
				</EuiFormRow>	
				
				<EuiButton  fill onClick={() => this.searchData()}>
					Search
				</EuiButton>
				
			</EuiForm>	
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
