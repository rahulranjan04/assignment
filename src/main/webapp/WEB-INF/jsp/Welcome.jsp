<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>RESTRAUNT</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
	$(document).ready(function() {
		$.ajax({
			type:'GET',
			url : "http://localhost:8080/dishes"
		}).then(function(json) {
			var tr;
			  for (var i = 0; i < json.length; i++) {
			    tr = $('<tr/>');
			    tr.append("<td>" + '<input type="checkbox" name="myCheckbox" />' + "</td>");
			    tr.append("<td>" + json[i].dishId + "</td>");
			    tr.append("<td>" + json[i].creationDate + "</td>");
			    tr.append("<td>" + json[i].dishImage + "</td>");
			    tr.append("<td>" + json[i].indicator + "</td>");
			    tr.append("<td>" + json[i].num_people + "</td>");
			    tr.append("<td>" + json[i].ingredients + "</td>");
			    tr.append("<td>" + json[i].instructions + "</td>");
			    $('table').first().append(tr);
			  }  
			});
		//});
	
	
	$("#submit").on('click', function ()
			{
		var formJqObj = $("#dishType");
	    var formDataObj = {};
	    (function(){
	        formJqObj.find(":input").not("[type='submit']").not("[type='reset']").not("[type='checkbox']").each(function(){
	            var thisInput = $(this);
	            formDataObj[thisInput.attr("name")] = thisInput.val();
	        });
	    })();	
				
				$.ajax({ 
					type:'POST',
					url : "http://localhost:8080/dishes",
					contentType:'application/json',
					dataType: 'json',
					data: JSON.stringify(formDataObj),
					success: function (data, textStatus, xhr) {
		                alert(xhr.status);
		            },
		            error: function (data, textStatus, xhr) {
		                alert(data.responseText);
		            }
		            
				});
				
			});
	
	$("#edit").on('click', function ()
			{
		var formJqObj = $("#dishType");
	    var formDataObj = {};
	    (function(){
	        formJqObj.find(":input").not("[type='submit']").not("[type='reset']").not("[type='checkbox']").each(function(){
	            var thisInput = $(this);
	            formDataObj[thisInput.attr("name")] = thisInput.val();
	        });
	    })();	
				
				var id=checkBoxValue();
				$.ajax({ 
					type:'PUT',
					url : "http://localhost:8080/dishes/"+id,
					contentType:'application/json',
					dataType: 'json',
					data: JSON.stringify(formDataObj),
					success: function (data, textStatus, xhr) {
		                alert(xhr.status);
		            },
		            error: function (data, textStatus, xhr) {
		                alert(data.responseText);
		            }
		            
				});
				
				function checkBoxValue() {
					 var values = new Array();
					       $.each($("input[name='myCheckbox[]']:checked").parents("td").siblings(), function() {
					           values.push($(this).text());
					           alert("val---"+values);
					       });
					       return values[0];
					}
				
			});
	
	
	});
	

	
</script>
</head>
<body>
	<form name="dishType" id="dishType">
		<div id="dishdisplay">
			<table>
			<tr>
			<th>Dish Id</th><th>Creation Date</th><th>Dish Image</th><th>Indicator</th><th>People Serve</th>
			</tr>
				<tr>
				<td><label>indicator:</label> <input type="text"
						name="indicator"><br></td>
				<td><label>indicator:</label> <input type="text"
						name="indicator"><br></td>
				<td><label>indicator:</label> <input type="text"
						name="indicator"><br></td>
						<td><label>indicator:</label> <input type="text"
						name="indicator"><br></td>		
					<td><label>indicator:</label> <input type="text"
						name="indicator"><br></td>
					<td><label>num_people:</label> <input type="text"
						name="num_people"><br></td>
				</tr>
				<tr>
					<td><input type="submit" value="Submit" id="submit"></td>
				</tr>
				<tr>
					<td><input type="submit" value="Edit" id="edit"></td>
				</tr>
			</table>
		</div>
	</form>


</body>
</html>