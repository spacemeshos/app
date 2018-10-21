import * as React from 'react';
import SideMenu from 'react-native-side-menu';
import Routing from '../../utils/routing';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
const { Route, Switch } = Routing;
import Dashboard from '../../components/Dashboard';
import { View, Platform } from 'react-native';
import Aside from '../../components/Aside';

interface IState {
    isOpen: boolean;
    selectedItem: string;
}

class Full extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: 'About'
        };
        this.toggle = this.toggle.bind(this);
    }

    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    public updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    public onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });

    public render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
            <View>
                {
                    (Platform.OS === 'web') ?
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100vh',
                            alignSelf: 'stretch'
                        }}>
                            <Aside />
                            <View style={{ marginLeft: 200, padding: 20 }}>
                                <Switch>
                                    <Route path="/" name="Dashboard" component={Dashboard} />
                                </Switch>
                            </View>
                        </View>
                        :
                        <View style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            height: '100vh',
                        }}>
                            <SideMenu
                                menu={menu}
                                isOpen={this.state.isOpen}
                                onChange={this.updateMenuState}
                            >
                                <Navbar />
                            </SideMenu>
                            <View>
                                <Switch>
                                    <Route path="/" name="Dashboard" component={Dashboard} />
                                </Switch>
                            </View>
                        </View>
                }
            </View>
        );
    }
}

export default Full;
