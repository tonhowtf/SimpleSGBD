const command = 'create table author (id number, name string, age number, city string, state string, country string)'
const tableName = command.match(/create table (\w+)/)[1];
const columns = command.match(/\((.+)\)/)[1];
const columnscomma = columns.split(",").map(col => col.trim());


const database = {};

database.tables[tableName].columns = {};

