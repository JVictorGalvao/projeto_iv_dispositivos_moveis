def define_status_intervencao(dado: str):
    if (dado == ""):
        return 1
    elif (dado == None):
        return 2
    elif (dado != ''):
        return 3

print(define_status_intervencao(""))