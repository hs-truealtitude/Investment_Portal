return function  (firstName, secondName) {

        $setUser('activeUserFirstName', firstName)
        $setUser('activeUserSecondName', secondName)

        return null;

}

