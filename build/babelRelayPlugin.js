import getbabelRelayPlugin from 'babel-relay-plugin';
import schema from '../data/schema.json';

export default getbabelRelayPlugin(schema.data);
