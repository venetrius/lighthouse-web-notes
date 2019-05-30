CREATE TABLE <tableName> (<colname> datatype .....);
INSET INTO <tableName> VALUES (<value>, <value>.... );
SELECT * FROM <tableName> WHERE <colname>  <operator> <someval> ORDERED BY <colname>;

aggregate functions -> SUM, MAX
SELECT <colname**> SUM(<colname*>) FROM <tablename> GROUP BY <colname**>;


wildcards:
% any number of char
_ one char
{'a%', '%a%a%', '_a%'} starts with / has two / second char is a

\ escaping


ordering by multiple columns
example:
select winner, yr, subject from nobel
where winner LIKE 'Sir%' order by yr DESC, winner



to crack https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial


distinct
count
sum


embended select, example:
select T.continent from (select continent, sum(population) as pop from world
where population >= 10000000
group by continent) as T
where T.pop > 100000000


JOIN

simple example
SELECT player,teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
  WHERE goal.teamid = 'GER'