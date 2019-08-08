# Partners In Code

Welcome to Partners In Code! You can use this app to find people to pair program with.
![Partners in Code](https://i.imgur.com/N1aj16Y.jpg)

## Installation

Clone the source locally:

```sh
$ git clone git@github.com:Madeline-Stark/PartnersInCode.git
```

Open up two separate tabs.

In tab one:

```sh
$ cd PartnersInCode
$ cd pic_api
$ bundle install
```
Run migrations:
```sh
$ rake db:migrate
```
Host on local server:
```sh
$ rails s -p 3001
```

In tab two:

```sh
$ cd PartnersInCode
$ cd pic_client
```
Run migrations:
```sh
$ npm install
```

Host on local server:
```sh
$ npm start
```

## Built With

* React
* Redux
* Rails

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Madeline-Stark/PartnersInCode

## License

This application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
