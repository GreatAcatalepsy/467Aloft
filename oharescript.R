ohare = read.csv("ohare.csv", header = TRUE)
cancel <- data.frame(ohare = c(ohare))
table(cancel$ohare)
tabs=lapply(cancel[-4], table)
out=data.frame(item=names(unlist(tabs)),count=unlist(tabs)[],
               stringsAsFactors=FALSE)
rownames(out)=c()
print(out)
data = out[c(), ] 
write.csv(data, file = "cancel.csv")